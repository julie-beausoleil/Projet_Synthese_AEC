/*ajout des entetes obligatoires pour le service region par WC*/
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Region } from '../dossierDesInterfaces/region';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class RegionService {
  regionUrl = 'https://projet-synthese-api.herokuapp.com/api/2096430/region'; /*variable chemin vers l'API region par WC*/

  constructor(private http: HttpClient) { }

  getRegions(): Observable<Region[]> {
    return this.http.get<Region[]>(this.regionUrl);
  }

  addRegion(region: Region): Observable<Region> {
    return this.http.post<Region>(this.regionUrl, region, httpOptions);
  }

  editRegion(region: Region): Observable<Region> {
    return this.http.put<Region>(this.regionUrl + "?id=" + region.id, region, httpOptions);
  }

  deleteRegion(id: String): Observable<Region> {
    return this.http.delete<Region>(this.regionUrl + "?id=" + id);
  }

}
