using System;
using System.Collections.Generic;
using System.Linq;
using Domain;
using Infrastructure;

namespace Services
{
    public class OrderService : IOrderService
    {
        private readonly IOrderRepository _orderRepository;

        public OrderService(IOrderRepository orderRepository)
        {
            _orderRepository = orderRepository;
        }

        public IEnumerable<OrderDto> GetOrders()
        {
            return _orderRepository.GetOrders().ToList().Select(o => new OrderDto(o));
        }
    }
}
