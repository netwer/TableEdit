using System;
using System.Collections.Generic;
using System.Linq;
using Domain;

namespace Infrastructure
{
    public class OrderRepository : IOrderRepository
    {
        public IEnumerable<Order> GetOrders()
        {
            var random = new Random();

            var orders = Enumerable.Range(0, 100).Select(i => new Order
            {
                Id = i + 100,
                Count = random.Next(1, 12),
                Description = $"Description {i}",
                Name = $"Name {i}",
                Price = random.NextDouble() * (200 - 10) + 10,
                Discount = random.Next(5, 10),
                OrderDate = DateTime.Now,
                DeliveryDaysCount = random.Next(1, 7)
            });
            return orders;
        }
    }
}
