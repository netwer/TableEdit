using System.Collections.Generic;

namespace Services
{
    public interface IOrderService
    {
        IEnumerable<OrderDto> GetOrders();
    }
}
