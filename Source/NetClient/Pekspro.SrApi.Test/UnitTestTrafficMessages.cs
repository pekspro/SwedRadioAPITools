using System.Linq;
using System.Threading.Tasks;
using Xunit;

namespace Pekspro.SrApi.Test
{
    public class UnitTestTrafficMessages
    {
        [Fact]
        public async Task TestGetTrafficMessagesAsync()
        {
            // Arrange
            var client = TestTools.CreateClient();

            // Act
            var trafficMessagesResponse = await client.GetTrafficMessagesAsync(Format.Json, null, null, null);

            // Assert
            Assert.NotNull(trafficMessagesResponse.Copyright);
            Assert.NotNull(trafficMessagesResponse.Pagination);
            Assert.Equal(1, trafficMessagesResponse.Pagination.Page);
            Assert.NotEmpty(trafficMessagesResponse.Messages);
        }

        [Fact]
        public async Task GetTrafficMessagesPaginationAsync()
        {
            // Arrange
            var client = TestTools.CreateClient();

            // Act
            var trafficMessagesResponse1 = await client.GetTrafficMessagesAsync(Format.Json, 1, 3, null);
            var trafficMessagesResponse2 = await client.GetTrafficMessagesAsync(Format.Json, 2, 3, null);

            // Assert
            Assert.Equal(1, trafficMessagesResponse1.Pagination.Page);
            Assert.Equal(3, trafficMessagesResponse1.Pagination.Size);
            Assert.Equal(2, trafficMessagesResponse2.Pagination.Page);
            Assert.Equal(3, trafficMessagesResponse2.Pagination.Size);
            // Assert.True(trafficMessagesResponse1.Messages.Last().Id > trafficMessagesResponse2.Messages.First().Id);
        }

        [Fact]
        public async Task GetTrafficMessagesFilterAsync()
        {
            // Arrange
            var client = TestTools.CreateClient();

            string trafficAreaName = "Jönköping";

            // Act
            var trafficMessagesAllResponse = await client.GetTrafficMessagesAsync(Format.Json, null, 100, null);
            var trafficMessagesLocalResponse = await client.GetTrafficMessagesAsync(Format.Json, null, 100, trafficAreaName);

            // Assert
            Assert.NotEmpty(trafficMessagesAllResponse.Messages);
            Assert.NotEmpty(trafficMessagesLocalResponse.Messages);
            Assert.NotEqual(trafficMessagesAllResponse.Messages.Sum(a => a.Id), trafficMessagesLocalResponse.Messages.Sum(a => a.Id));
        }
    }
}
