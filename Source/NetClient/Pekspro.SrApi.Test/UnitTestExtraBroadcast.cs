using System.Linq;
using System.Threading.Tasks;
using Xunit;

namespace Pekspro.SrApi.Test
{
    public class UnitTestExtraBroadcast
    {
        [Fact]
        public async Task TestGetExtraBroadcastsAsync()
        {
            // Arrange
            var client = TestTools.CreateClient();

            // Act
            var extraBroadcastResponse = await client.GetExtraBroadcastsAsync(Format.Json, null, null);

            // Assert
            Assert.NotNull(extraBroadcastResponse.Copyright);
            Assert.NotNull(extraBroadcastResponse.Pagination);
            Assert.Equal(1, extraBroadcastResponse.Pagination.Page);
            Assert.NotEmpty(extraBroadcastResponse.Broadcasts);

            var extraBroadcast = extraBroadcastResponse.Broadcasts.First();

            Assert.NotEmpty(extraBroadcast.Name);
            Assert.NotEmpty(extraBroadcast.Description);
            Assert.NotNull(extraBroadcast.Publisher);
            Assert.NotNull(extraBroadcast.Channel);
            Assert.NotNull(extraBroadcast.Liveaudio);
            Assert.NotNull(extraBroadcast.Mobileliveaudio);
        }

        [Fact]
        public async Task TestGetExtraBroadcastPaginationAsync()
        {
            // Arrange
            var client = TestTools.CreateClient();

            // Act
            var extraBroadcastResponse1 = await client.GetExtraBroadcastsAsync(Format.Json, 1, 3);
            var extraBroadcastResponse2 = await client.GetExtraBroadcastsAsync(Format.Json, 2, 3);

            // Assert
            Assert.Equal(1, extraBroadcastResponse1.Pagination.Page);
            Assert.InRange(extraBroadcastResponse1.Pagination.Size, 2, 3);
            Assert.Equal(2, extraBroadcastResponse2.Pagination.Page);
            Assert.InRange(extraBroadcastResponse2.Pagination.Size, 2, 3);
        }
    }
}
