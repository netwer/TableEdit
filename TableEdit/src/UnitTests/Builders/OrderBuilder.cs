using Domain;

namespace UnitTests.Builders
{
    public class OrderBuilder
    {
        private readonly Order _order;

        public OrderBuilder()
        {
            _order = new Order();
        }

        public OrderBuilder WithId(long id)
        {
            _order.Id = id;
            return this;
        }

        public OrderBuilder WithPrice(double price)
        {
            _order.Price = price;
            return this;
        }

        public OrderBuilder WithDiscount(double discount)
        {
            _order.Discount = discount;
            return this;
        }

        public static implicit operator Order(OrderBuilder builder)
        {
            return builder._order;
        }
    }
}
