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
                new Order {Id = 1, Count = 2, Description = "Description 1", Name = "Name 1"},
                new Order {Id = 2, Count = 4, Description = "Description 2", Name = "Name 2"},
                new Order {Id = 3, Count = 6, Description = "Description 3", Name = "Name 3"},
            };
        }
    }
}
