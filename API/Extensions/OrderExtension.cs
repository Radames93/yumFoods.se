using DataAccess.Repositories;
using Shared.Entities;
using Shared.Interfaces;

namespace API.Extensions
{
    public static class OrderExtension
    {
        /// <summary>
        /// Maps the API endpoints for Order operations.
        /// Routes for fetching, adding, retrieving orders by different parameters. 
        /// </summary>

        public static IEndpointRouteBuilder MapOrderEndpoints(this IEndpointRouteBuilder app)
        {
            var group = app.MapGroup("/orders");

            group.MapGet("/", GetAllOrdersAsync);

            group.MapGet("/{id}", GetOrderByIdAsync);

            group.MapGet("/userId/{userId}", GetOrdersByUserIdAsync);

            group.MapPost("/", PostOrderAsync);

            group.MapDelete("/{id}", DeleteOrderAsync);
            return app;
        }

        private static async Task<IResult> GetOrdersByUserIdAsync(OrderWithDetailsRepository repo, int userId)
        {
            var purchase = await repo.GetOrdersByUserIdAsync(userId);
            return Results.Ok(purchase);
        }

        /// <summary>
        /// Get all the Orders in the database
        /// </summary>
        /// <param name="repo">An instance of class OrderRepository that provides methods for interacting with orders in the database. </param>
        /// <returns>A success code when the orders are successfully fetched. </returns>
        private static async Task<IResult> GetAllOrdersAsync(IOrderRepository<Order> repo)
        {
            var orders = await repo.GetAllOrdersAsync();
            return Results.Ok(orders);
        }


        /// <summary>
        /// Get Order by its ID from the database
        /// </summary>
        /// <param name="repo">An instance of class OrderRepository that provides methods for interacting with object in the database. </param>
        /// <param name="id">Id-number of the object from the database</param>
        /// <returns>A success code when the object with the id-number is fetched. </returns>
        private static async Task<IResult> GetOrderByIdAsync(IOrderRepository<Order> repo, int id)
        {
            var order = await repo.GetOrderByIdAsync(id);
            return Results.Ok(order);
        }

        //v�nta med denna tills koppling till user db �r set

        //private static Task GetOrderByEmailAsync(OrderRepository repo, string email)
        //{
        //    return repo.GetOrderByEmailAsync(email);
        //}

        /// <summary>
        /// Create a new OrderDetail to the database when an order is placed. Validates that the newOD does not already exist. 
        /// </summary>
        /// <param name="repo">An instance of class OrderRepository that provides methods for interacting with object in the database. </param>
        /// <param name="newOrder">Object to be added to the database. </param>
        /// <returns>Bad request if object added already exist or a success code if the object was added to the database successfully.</returns>
        private static async Task<IResult> PostOrderAsync(IOrderRepository<Order> repo, Order newOrder)
        {
            var exisitngOrder = await repo.GetOrderByIdAsync(newOrder.Id);
            if (exisitngOrder is not null)
            {
                return null;
            }

            await repo.AddOrderAsync(newOrder);
            return Results.Ok(newOrder);
        }

        /// <summary>
        /// Deletes an order from the database
        /// </summary>
        /// <param name="repo">An instance of class OrderRepository that provides methods for interacting with objects in the database. </param>
        /// <param name="id">Object with id number to be deleted </param>
        /// <returns>Success code if the object was deleted from the database successfully.</returns>
        private static async Task<IResult> DeleteOrderAsync(IOrderRepository<Order> repo, int id)
        {
            await repo.DeleteOrderAsync(id);
            return Results.Ok();
        }

    }

}