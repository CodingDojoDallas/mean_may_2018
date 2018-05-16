import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { ActivatedRoute,Params,Router } from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class HttpService {
	products:any;
  constructor(
  	private _httpClient: HttpClient,
	private _router: Router
  	 ) { }

  getList(){
  	let observable = this._httpClient.get('/api/products')
  	observable.subscribe(data => {
  		this.products = data
  	})
  }
  destroy(id){
  	return this._httpClient.delete(`/api/products/${id}`)
  }
  create(product){
  	return this._httpClient.post('/api/products',product)
  }
  update(product){
  	return this._httpClient.put(`/api/products/${product._id}`,product)
  }
  show(id){
  	return this._httpClient.get(`/api/products/${id}`)
  }
  goHome(){
  	this._router.navigate(['/products']);
  }
}
