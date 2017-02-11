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
        }

        public long Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public int Count { get; set; }
    }
}
