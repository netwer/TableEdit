using Domain;
using UnitTests.Builders;
using Xunit;

namespace UnitTests.OrderTests
{
    public class PriceWithDiscountTests
    {
        [Fact]
        public void PriceWithDiscount_WithPriceIs100AndDiscountIs10Percent_ReturnCorrectPrice()
        {
            Order order = new OrderBuilder().WithId(1).WithPrice(100).WithDiscount(10);

            Assert.Equal(90, order.PriceWithDiscount);
        }

        [Fact]
        public void PriceWithDiscount_WithPriceIs100AndDiscountIs5Percent_ReturnCorrectPrice()
        {
            Order order = new OrderBuilder().WithId(1).WithPrice(100).WithDiscount(5);

            Assert.Equal(95, order.PriceWithDiscount);
        }

        [Fact]
        public void PriceWithDiscount_WithPriceIs100AndDiscountIs59Percent_ReturnCorrectPrice()
        {
            Order order = new OrderBuilder().WithId(1).WithPrice(100).WithDiscount(59);

            Assert.Equal(41, order.PriceWithDiscount);
        }
    }
}
