using System.Collections.Generic;
using Microsoft.AspNet.Mvc;
using Services;

namespace TableEdit.Controllers
{
    [Route("api/[controller]")]
    public class OrdersController : Controller
    {
        private readonly IOrderService _orderService;

        public OrdersController(IOrderService orderService)
        {
            _orderService = orderService;
        }

        // GET: api/orders
        [HttpGet]
        public IEnumerable<OrderDto> Get()
        {
            return _orderService.GetOrders();
        }        
    }
}
