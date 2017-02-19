using System;
using System.Collections.Generic;
using Domain;

namespace Infrastructure
{
    public class OrderRepository : IOrderRepository
    {
        public IEnumerable<Order> GetOrders()
        {
            return new List<Order>
            {
                new Order
                {
                    Id = 100,
                    Count = 2,
                    Description = "Description 1",
                    Name = "Name 1",
                    Price = 50.00,
                    Discount = 10.1,
                    OrderDate = DateTime.Now,
                    DeliveryDaysCount = 3
                },
                new Order
                {
                    Id = 101,
                    Count = 4,
                    Description = "Description 2",
                    Name = "Name 2",
                    Price = 22.05,
                    Discount = 12.7,
                    OrderDate = DateTime.Now.AddDays(-7),
                    DeliveryDaysCount = 6
                },
                new Order
                {
                    Id = 102,
                    Count = 6,
                    Description = "Description 3",
                    Name = "Name 3",
                    Price = 142.89,
                    Discount = 23.8,
                    OrderDate = DateTime.Now.AddDays(-5),
                    DeliveryDaysCount = 10
                }
            };
        }
    }
}
