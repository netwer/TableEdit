using System.Collections.Generic;
using Domain;

namespace Infrastructure
{
    public interface IOrderRepository
    {
        IEnumerable<Order> GetOrders();
    }
}
