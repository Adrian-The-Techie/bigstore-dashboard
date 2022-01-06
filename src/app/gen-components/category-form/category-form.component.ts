import { Component, Input, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfigService } from 'src/services/config.service';
import { HttpService } from 'src/services/http.service';
import { ConfirmActionDialogComponent } from '../confirm-action-dialog/confirm-action-dialog.component';

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styles: [],
})
export class CategoryFormComponent implements OnInit {
  public categoryForm: any | FormGroup;
  private url: any;
  name: any = '';
  message = '';

  @Input() modal = false;
  constructor(
    private _fb: FormBuilder,
    private _http: HttpService,
    private _config: ConfigService,
    private _route: ActivatedRoute,
    private _router: Router,
    private _dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.genForm();
    this.getUrl();
  }

  genForm(type = 'new', data: any = null) {
    if (type == 'new') {
      this.message = 'You are aboute to save a category. Proceed?';
      return (this.categoryForm = this._fb.group({
        id: new FormControl(''),
        name: new FormControl('', Validators.required),
      }));
    } else {
      this.categoryForm = this._fb.group({
        id: new FormControl(data.id),
        name: new FormControl(data.name, Validators.required),
      });
      this.name = this.categoryForm.get('name').value;
      this.message = `You are about to update ${this.name} details. Proceed ?`;
      return this.categoryForm;
    }
  }
  getUrl() {
    this._route.params.subscribe((params) => {
      this.url = params['url'];
      if (this.url != undefined) {
        this.getCategory();
      }
    });
  }
  getCategory() {
    const request = {
      activityID: 'getCategory',
      data: {
        url: this.url,
      },
    };
    this._http
      .request(request)
      .subscribe((response) => this.genForm('edit', response.data));
  }

  save(refresh: boolean = false, route: boolean = true) {
    if (this.categoryForm.valid) {
      this._dialog
        .open(ConfirmActionDialogComponent, {
          data: {
            message: this.message,
          },
        })
        .afterClosed()
        .subscribe((response) => {
          if (response != undefined) {
            if (response) {
              const request = {
                apiid: this.name == '' ? 'saveNewCategory' : 'updateCategory',
                data: this.categoryForm.value,
              };
              this._http.request(request).subscribe((response) => {
                this._config.showSnackBar(response);
                if (response.status == 0) {
                  this._dialog
                    .open(ConfirmActionDialogComponent, {
                      data: {
                        type: 'warning',
                        message: response.message,
                      },
                    })
                    .afterClosed()
                    .subscribe((response) => {
                      location.reload();
                    });
                } else {
                  if (refresh == true) {
                    this.categoryForm.reset();
                  } else {
                    if (route == true) {
                      this._router.navigate(['/system/categories']);
                    }
                  }
                }
              });
            }
          }
        });
    } else {
      this._dialog.open(ConfirmActionDialogComponent, {
        data: {
          type: 'warning',
          message: 'Please fill in all the required field marked in red',
        },
      });
    }
  }
}
