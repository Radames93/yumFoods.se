﻿using Shared.Entities;
using Shared.Interfaces;

namespace API.Extensions;

public static class ProductExtension
{
    public static IEndpointRouteBuilder MapProductEndpoints(this IEndpointRouteBuilder app)
    {
        var group = app.MapGroup("/products");

        group.MapGet("/", GetAllProductsAsync);
        group.MapGet("/{id}", GetProductByIdAsync);
        group.MapGet("/title/{title}", GetProductByNameAsync);
        group.MapGet("/category/{category}", GetProductByCategoryAsync); //category
        group.MapGet("/cuisine/{cuisine}", GetProductByCuisineAsync); //cuisine
        group.MapGet("/diet/{diet}", GetProductsByDietAsync);
        
        group.MapPost("/", AddProductAsync);

        group.MapPut("/{id}", UpdateProductAsync);

        group.MapDelete("/{id}", DeleteProductAsync);
        return app;
    }

    private static async Task<IResult> GetProductsByDietAsync(IProductRepository<Product> repo, string diet)
    {
        var prod = await repo.GetProductsByDietAsync(diet);
        return Results.Ok(prod);
    }

    private static async Task<IResult> GetProductByNameAsync(IProductRepository<Product> repo, string title)
    {
        var prod = await repo.GetProductByNameAsync(title);
        return Results.Ok(prod);
    }

    private static async Task<IResult> GetAllProductsAsync(IProductRepository<Product> repo)
    {
        var prod = await repo.GetAllProductsAsync();
        return Results.Ok(prod);
    }

    private static async Task<IResult> GetProductByIdAsync(IProductRepository<Product> repo, int id)
    {
        var prod = await repo.GetProductByIdAsync(id);
        return Results.Ok(prod);
    }

    private static async Task<IResult> GetProductByCategoryAsync(IProductRepository<Product> repo, string category)
    {
        var prod = await repo.GetProductByCategoryAsync(category);
        return Results.Ok(prod);
    }

    private static async Task<IResult> GetProductByCuisineAsync(IProductRepository<Product> repo, string cuisine)
    {
        var prod = await repo.GetProductByCuisineAsync(cuisine);
        return Results.Ok(prod);
    }

    private static async Task<IResult> AddProductAsync(IProductRepository<Product> repo, Product newProd)
    {
      
        var existingProd = await repo.GetProductByIdAsync(newProd.Id);
        if(existingProd is not null)
        {
            return Results.BadRequest($"Product with product number {existingProd.Id} already exist");
        }

        await repo.AddProductAsync(newProd);
        return Results.Ok();
    }

    private static async Task<IResult> UpdateProductAsync(IProductRepository<Product> repo, int id, Product updatedProd)
    {
        var existingProd = await repo.GetProductByIdAsync(id);
        if(existingProd is null)
        {
            return Results.BadRequest($"Product with product number {id} does not exist");
        }

        await repo.UpdateProductAsync(id, updatedProd);
        return Results.Ok();
    }

    private static async Task<IResult> DeleteProductAsync(IProductRepository<Product> repo, int id)
    {
        await repo.DeleteProductAsync(id);
        return Results.Ok();
    }
}