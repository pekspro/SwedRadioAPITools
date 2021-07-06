using System;
using System.Linq;
using System.Threading.Tasks;
using Xunit;

namespace Pekspro.SrApi.Test
{
    public class UnitTestLastPublished
    {
        [Fact]
        public async Task TestGetLastPublishedShowsAsync()
        {
            // Arrange
            var client = TestTools.CreateClient();

            // Act
            var episodesResponse = await client.GetLastPublishedShowsAsync(Format.Json, null, null, null);

            // Assert
            Assert.NotNull(episodesResponse.Copyright);
            Assert.NotNull(episodesResponse.Pagination);
            Assert.Equal(1, episodesResponse.Pagination.Page);
            Assert.NotEmpty(episodesResponse.Shows);

            Assert.Contains(episodesResponse.Shows, a => a.Broadcast?.Playlist != null);
            Assert.Contains(episodesResponse.Shows, a => a.Broadcast?.Broadcastfiles != null);
            Assert.Contains(episodesResponse.Shows, a => !string.IsNullOrEmpty(a.Type));
            Assert.Contains(episodesResponse.Shows, a => !string.IsNullOrEmpty(a.Imageurl));
            Assert.Contains(episodesResponse.Shows, a => !string.IsNullOrEmpty(a.Imageurltemplate));
            Assert.Contains(episodesResponse.Shows, a => !string.IsNullOrEmpty(a.Program?.Name));
        }

        [Fact]
        public async Task TestGetLastPublishedPaginationAsync()
        {
            // Arrange
            var client = TestTools.CreateClient();

            // Act
            var episodesResponse1 = await client.GetLastPublishedShowsAsync(Format.Json, 1, 3, null);
            var episodesResponse2 = await client.GetLastPublishedShowsAsync(Format.Json, 2, 3, null);

            // Assert
            Assert.Equal(1, episodesResponse1.Pagination.Page);
            Assert.Equal(3, episodesResponse1.Pagination.Size);
            Assert.Equal(2, episodesResponse2.Pagination.Page);
            Assert.Equal(3, episodesResponse2.Pagination.Size);
            // Assert.True(episodesResponse1.Shows.Last().Id > episodesResponse2.Shows.First().Id); //This is not always true.
        }

        [Theory]
        [InlineData(AudioQuality.Lo, "lo.m4a")]
        [InlineData(AudioQuality.Normal, ".m4a")]
        [InlineData(AudioQuality.Hi, "hi.m4a")]
        public async Task TestGetLastPublishedShowsWithQualityAsync(AudioQuality audioQuality, string expectedExtension)
        {
            // Arrange
            var client = TestTools.CreateClient();

            // Act
            var episodesResponse = await client.GetLastPublishedShowsAsync(Format.Json, null, null, audioQuality);

            // Assert
            Assert.Contains(episodesResponse.Shows, a => a.Broadcast?.Broadcastfiles.First().Url?.EndsWith(expectedExtension) == true);
        }
    }
}
