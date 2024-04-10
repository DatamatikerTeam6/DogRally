using System.Text.Json.Serialization;

namespace DogRally.Models
{
    public class Position
    {
        [JsonPropertyName("x")]
        public string X { get; set; }
        [JsonPropertyName("y")]
        public string Y { get; set; }
    }
}
