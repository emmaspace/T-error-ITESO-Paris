import { Injectable } from '@angular/core';
import { Zip } from '../interfaces/Zip.interface';

@Injectable({
  providedIn: 'root',
})
export class ZipCodeService {
  async getZipCodeInfo(zipCode: number): Promise<{} | Zip | string> {
    let info: {} | Zip | string = {};
    try {
      const response = await fetch(`https://api.zippopotam.us/MX/${zipCode}`);
      info = await response.json();
    } catch (err) {
      info = 'Hubo un error al consultar el código postal'
    } finally {
      return info ;
    }
  }
}
