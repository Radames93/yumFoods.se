﻿namespace DataAccess.Entities;

public class Order
{
    public int Id { get; set; }
    public int UserId { get; set; }
    public DateTime OrderDate { get; set; }
    public DateTime DeliveryDate { get; set; }
    public ICollection<Product> Products { get; set; } = new List<Product>();
    public string DeliveryAdress { get; set; }
    public string DeliveryCity { get; set; }
    public int DeliveryPostalCode { get; set; }
    public string DeliveryCountry { get; set; }
    public int Quantity { get; set; }
    public double Total { get; set; }


}