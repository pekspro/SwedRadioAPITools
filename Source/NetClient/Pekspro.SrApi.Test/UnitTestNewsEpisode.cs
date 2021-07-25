using System.Linq;
using System.Threading.Tasks;
using Xunit;

namespace Pekspro.SrApi.Test
{
    public class UnitTestNewsEpisode
    {
        [Fact]
        public async Task TestGetNewsEpisodesAsync()
        {
            // Arrange
            var client = TestTools.CreateClient();

            // Act
            var episodesResponse = await client.GetNewsEpisodesAsync(Format.Json, null);

            // Assert
            Assert.NotEmpty(episodesResponse.Episodes);

            Assert.Contains(episodesResponse.Episodes, a => !string.IsNullOrEmpty(a.Program?.Name));
            Assert.Contains(episodesResponse.Episodes, a => !string.IsNullOrEmpty(a.Audiopreference));
            Assert.Contains(episodesResponse.Episodes, a => !string.IsNullOrEmpty(a.Audiopresentation));
            Assert.Contains(episodesResponse.Episodes, a => !string.IsNullOrEmpty(a.Audiopriority));
            Assert.Contains(episodesResponse.Episodes, a => a.Broadcast != null && a.Broadcast.Broadcastfiles.Any());
            Assert.Contains(episodesResponse.Episodes, a => a.Broadcast != null && a.Broadcast.Broadcastfiles.Any());
            Assert.Contains(episodesResponse.Episodes, a => a.Broadcasttime != null);
            // Assert.Contains(episodesResponse.Episodes, a => a.Listenpodfile != null); // This breaks sometimes
            Assert.Contains(episodesResponse.Episodes, a => !string.IsNullOrEmpty(a.Description));
            Assert.Contains(episodesResponse.Episodes, a => !string.IsNullOrEmpty(a.Imageurl));
            Assert.Contains(episodesResponse.Episodes, a => !string.IsNullOrEmpty(a.Imageurltemplate));
            Assert.Contains(episodesResponse.Episodes, a => !string.IsNullOrEmpty(a.Title));
        }

        [Theory]
        [InlineData(AudioQuality.Lo, "lo.m4a")]
        [InlineData(AudioQuality.Normal, ".m4a")]
        [InlineData(AudioQuality.Hi, "hi.m4a")]
        public async Task TestGetNewsEpisodesWithQualityAsync(AudioQuality audioQuality, string expectedExtension)
        {
            // Arrange
            var client = TestTools.CreateClient();

            // Act
            var episodesResponse = await client.GetNewsEpisodesAsync(Format.Json, audioQuality);

            // Assert
            Assert.Contains(episodesResponse.Episodes, a => a.Broadcast?.Broadcastfiles.Any(b => b.Url?.EndsWith(expectedExtension) == true) == true);
        }
    }
}
