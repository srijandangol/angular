import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Product } from "../models/product.model";

/**
 * Service for managing product data operations
 * Handles API calls to external product data source
 * Provides products for the ecommerce application
 */
@Injectable({
    providedIn: 'root'
})
export class ProductService {
    /** Base URL for the fake store API */
    private apiUrl = 'https://fakestoreapi.com/products';
    
    /**
     * Constructor - Injects HttpClient for API calls
     * @param http - Angular HttpClient for making HTTP requests
     */
    constructor(private http: HttpClient) {}

    /**
     * Fetches all products from the external API
     * Used by product effects to load product data
     * @returns Observable<Product[]> - Stream of product array from API
     */
    getProducts(): Observable<Product[]> {
        return this.http.get<Product[]>(this.apiUrl);
    }
}