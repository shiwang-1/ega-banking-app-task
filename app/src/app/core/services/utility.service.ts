import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  constructor(private _router: Router) { }

  /**
   * Function to allow only numbers in input field
   * @param event Key event
   * @returns True if number is input
   */
  numberOnly(event: any) {
    const charCode = event.which ? event.which : event.keyCode;
    const allowedKey = [8, 9, 17, 37, 38, 39, 40, 46, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105];
    if (allowedKey.includes(charCode)) {
      return true;
    } else {
      return false;
    }
  }

  /**
   * Function to set trimmed value to form control
   * @param control Form control
   */
  removeSpaces(control: AbstractControl<any, any>): void {
    let value: string = control.value;
    control.setValue(value && value.trim());
  }

  /**
   * Function to set queryParams in URL with merge as queryParams handling
   * @param data Data with key value pairs to be set as queryParams in URL
   */
  addQueryParamsToUrl(data: any): void {
    this._router.navigate([], {
      queryParams: data,
      queryParamsHandling: 'merge'
    });
  }

  /**
   * Function that takes object and returns the object in query params structure
   * @param queryParams Object of queryParams
   * @returns queryParams structured for URL
   */
  returnQueryParams(queryParams: any): string {
    let query = "";
    if (queryParams) {
      var esc = encodeURIComponent;
      query += Object.keys(queryParams)
        .map(k => esc(k) + '=' + esc(queryParams[k]))
        .join('&');
    }
    return query != "" ? "?" + query : "";
  }

  /**
   * Checks if user is browsing in PC or Mobile devices
   * @returns `True` - if user is browsing in PC device
   * @returns `False` - if user is browsing in Mobile device
   */
  checkIfWebUser(): boolean {
    if (navigator.userAgent.match(/Android/i)
      || navigator.userAgent.match(/webOS/i)
      || navigator.userAgent.match(/iPhone/i)
      || navigator.userAgent.match(/iPad/i)
      || navigator.userAgent.match(/iPod/i)
      || navigator.userAgent.match(/BlackBerry/i)
      || navigator.userAgent.match(/Windows Phone/i)) {
      return false;
    } else {
      return true;
    }
  }

}
