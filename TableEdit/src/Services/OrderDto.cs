using System;
using Domain;

namespace Services
{
    public class OrderDto
    {
        public OrderDto(Order order)
        {
            Id = order.Id;
            Name = order.Name;
            Description = order.Description;
            Count = order.Count;
            Price = order.Price;
            Discount = order.Discount;
            PriceWithDiscount = order.PriceWithDiscount;
            OrderDate = order.OrderDate.Date.ToString("d");
            DeliveryDaysCount = order.DeliveryDaysCount;
            DeliveryDate = order.DeliveryDate.ToString("d");
        }

        public long Id { get; private set; }
        public string Name { get; private set; }
        public string Description { get; private set; }
        public int Count { get; private set; }
        public double Price { get; private set; }
        public double Discount { get; private set; }
        public double PriceWithDiscount { get; private set; }
        public string OrderDate { get; private set; }
        public int DeliveryDaysCount { get; private set; }        
        public string DeliveryDate { get; private set; }
    }
}
