using System;

namespace Domain
{
    public class Order
    {
        public long Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public int Count { get; set; }
        public double Price { get; set; }
        public double Discount { get; set; }
        public DateTime OrderDate { get; set; }
        public int DeliveryDaysCount { get; set; }

        public double PriceWithDiscount => Price - (Price * Discount / 100);

        public DateTime DeliveryDate => OrderDate.AddDays(DeliveryDaysCount);
    }
}
