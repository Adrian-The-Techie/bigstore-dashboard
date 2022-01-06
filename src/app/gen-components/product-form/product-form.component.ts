import { Component, Input, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router, ActivatedRoute } from '@angular/router';
import { ConfigService } from 'src/services/config.service';
import { HttpService } from 'src/services/http.service';
import { ConfirmActionDialogComponent } from '../confirm-action-dialog/confirm-action-dialog.component';
import { CustomerDocsComponent } from '../customer-docs/customer-docs.component';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styles: [],
})
export class ProductFormComponent implements OnInit {
  public genSettingsForm: FormGroup | any;
  logoIsFile: boolean = false;
  host: any = '';
  @Input() modal: any;
  url: any;
  categories: any;
  constructor(
    private _fb: FormBuilder,
    private _router: Router,
    private _http: HttpService,
    private _config: ConfigService,
    private _dialog: MatDialog,
    private _route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getCategories();
    this.host = this._config.uri;
    this.genForm('new');
    this.getUrl();
  }
  getCategories() {
    const request = {
      apiid: 'getCategories',
    };
    this._http.request(request).subscribe((response) => {
      this.categories = response.data;
    });
  }
  getUrl() {
    this._route.params.subscribe((params) => {
      if (params['url'] != undefined) {
        this.url = params['url'];
        this.getGeneralSettings();
      }
    });
  }
  genForm(type = 'new', data: any = null) {
    if ((type = 'new')) {
      return (this.genSettingsForm = this._fb.group({
        id: '',
        apiid: 'saveNewProduct',
        name: new FormControl('', Validators.required),
        thumbnail: new FormControl('', Validators.required),
        price: new FormControl('', Validators.required),
        category: new FormControl('', Validators.required),
        description: new FormControl('', Validators.required),
      }));
    } else {
      return (this.genSettingsForm = this._fb.group({
        id: new FormControl(data.id, Validators.required),
        apiid: 'updateProductDetails',
        name: new FormControl(data.name, Validators.required),
        price: new FormControl(data.price, Validators.required),
        category: new FormControl(data.category, Validators.required),
        thumbnail: new FormControl(data.thumbnail, Validators.required),
        description: new FormControl(data.description, Validators.required),
      }));
    }
  }

  getGeneralSettings() {
    this._http
      .request({
        activityID: 'getProducts',
        data: {
          url: this.url,
        },
      })
      .subscribe((response) => {
        this.genForm(response.data, 'edit');
      });
  }

  save() {
    // if (this.genSettingsForm.valid) {
    this._dialog
      .open(ConfirmActionDialogComponent, {
        data: {
          message: 'You are about to product. Proceed?',
        },
      })
      .afterClosed()
      .subscribe((response) => {
        if (response == undefined || response == '') {
          return;
        } else {
          let form = new FormData();
          let formData = Object.entries(this.genSettingsForm.value);
          for (let [field, value] of formData) {
            form.append(field, value as any);
          }

          this._http.upload(form).subscribe((response) => {
            // this._config.showSnackBar(response);
            if (response.status == 1) {
              setTimeout(() => {
                // location.reload();
              });
            }
          });
        }
      });
    // } else {
    //   console.log(this.genSettingsForm.errors);
    //   this._dialog.open(ConfirmActionDialogComponent, {
    //     data: {
    //       type: 'warning',
    //       message: 'Please fill in all the required field marked in red',
    //     },
    //   });
    // }
  }
  getLogo(event: any) {
    const image = event.target.files[0];
    this.genSettingsForm.patchValue({
      thumbnail: image,
    });
    this.logoIsFile = true;
  }
  updateLogo() {
    this._dialog
      .open(CustomerDocsComponent, {
        data: {
          title: 'Change product thumbnail',
          message: 'You are about to change the product thumbnail. Proceed?',
          thumbnail: true,
        },
      })
      .afterClosed()
      .subscribe((response) => {
        if (response == undefined || response == '') {
          return;
        } else {
          let data: any = {};
          data['activityID'] = 'updateLogo';
          data['logo'] = response;
          let form = new FormData();
          let formData = Object.entries(data);
          for (let [field, value] of formData) {
            form.append(field, value as any);
          }
          this._http.upload(form).subscribe((response) => {
            this._config.showSnackBar(response);
            if (response.status == 1) {
              location.reload();
            }
          });
        }
      });
  }
}
