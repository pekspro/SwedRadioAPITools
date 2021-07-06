using System.Linq;
using System.Threading.Tasks;
using Xunit;

namespace Pekspro.SrApi.Test
{
    public class UnitTestTrafficArea
    {
        [Fact]
        public async Task TestGetTrafficAreasAsync()
        {
            // Arrange
            var client = TestTools.CreateClient();

            // Act
            var trafficAreasResponse = await client.GetTrafficAreasAsync(Format.Json, null, null);

            // Assert
            Assert.NotNull(trafficAreasResponse.Copyright);
            Assert.NotEmpty(trafficAreasResponse.Areas);

            var area = trafficAreasResponse.Areas.First();

            Assert.NotEmpty(area.Name);
        }

        [Fact]
        public async Task TestGetTrafficAreasPaginationAsync()
        {
            // Arrange
            var client = TestTools.CreateClient();

            // Act
            var trafficAreasResponse1 = await client.GetTrafficAreasAsync(Format.Json, 1, 3);
            var trafficAreasResponse2 = await client.GetTrafficAreasAsync(Format.Json, 2, 3);

            // Assert
            Assert.Equal(1, trafficAreasResponse1.Pagination.Page);
            Assert.Equal(3, trafficAreasResponse1.Pagination.Size);
            Assert.Equal(2, trafficAreasResponse2.Pagination.Page);
            Assert.Equal(3, trafficAreasResponse2.Pagination.Size);
        }

        [Theory]
        [InlineData(16, 18)]
        [InlineData(0, 0)]
        [InlineData(-180, 18)]
        [InlineData(180, 18)]
        [InlineData(16, -90)]
        [InlineData(16, 90)]
        public async Task TestGetTrafficAreaAsync(double longitude, double latitude)
        {
            // Arrange
            var client = TestTools.CreateClient();

            // Act
            var trafficAreaResponse = await client.GetTrafficAreaAsync(Format.Json, longitude, latitude);

            // Assert
            Assert.NotNull(trafficAreaResponse.Copyright);
            Assert.NotNull(trafficAreaResponse.Area);
            Assert.NotEmpty(trafficAreaResponse.Area.Name);
        }
    }
}
