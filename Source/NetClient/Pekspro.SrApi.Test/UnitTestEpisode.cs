using System;
using System.Linq;
using System.Threading.Tasks;
using Xunit;

namespace Pekspro.SrApi.Test
{
    public class UnitTestEpisode
    {
        private const int TestProgramId = 516;

        [Fact]
        public async Task TestGetEpisodesAsync()
        {
            // Arrange
            var client = TestTools.CreateClient();

            // Act
            var episodesResponse = await client.GetEpisodesAsync(Format.Json, null, null, TestProgramId, null, null, AudioQuality.Hi);

            // Assert
            Assert.NotNull(episodesResponse.Copyright);
            Assert.NotNull(episodesResponse.Pagination);
            Assert.Equal(1, episodesResponse.Pagination.Page);
            Assert.NotEmpty(episodesResponse.Episodes);

            var episode = episodesResponse.Episodes.First();

            Assert.NotEmpty(episode.Program.Name);
            
            Assert.NotEmpty(episode.Audiopreference);
            Assert.NotEmpty(episode.Audiopresentation);
            Assert.NotEmpty(episode.Audiopriority);
            Assert.NotNull(episode.Broadcast);
            Assert.NotEmpty(episode.Broadcast.Broadcastfiles);
            Assert.NotNull(episode.Broadcasttime);
            Assert.NotEmpty(episode.Description);
            Assert.NotNull(episode.Downloadpodfile);
            Assert.NotEmpty(episode.Imageurl);
            Assert.NotEmpty(episode.Imageurltemplate);
            Assert.NotNull(episode.Listenpodfile);
            Assert.NotEmpty(episode.Title);
        }

        [Fact]
        public async Task TestGetEpisodesPaginationAsync()
        {
            // Arrange
            var client = TestTools.CreateClient();

            // Act
            var episodesResponse1 = await client.GetEpisodesAsync(Format.Json, 1, 3, TestProgramId, null, null, null);
            var episodesResponse2 = await client.GetEpisodesAsync(Format.Json, 2, 3, TestProgramId, null, null, null);

            // Assert
            Assert.Equal(1, episodesResponse1.Pagination.Page);
            Assert.Equal(3, episodesResponse1.Pagination.Size);
            Assert.Equal(2, episodesResponse2.Pagination.Page);
            Assert.Equal(3, episodesResponse2.Pagination.Size);
            Assert.True(episodesResponse1.Episodes.Last().Id > episodesResponse2.Episodes.First().Id);
        }

        [Theory]
//        [InlineData("1976-04-01", "1975-04-30", 0)]
        [InlineData("2021-04-01", "2021-04-30", 3)]
        public async Task TestGetEpisodesWithPeriodFilterAsync(string fromDateString, string toDateString, int expectedCount)
        {
            // Arrange
            var client = TestTools.CreateClient();
            DateTimeOffset? fromDate = null;
            DateTimeOffset? toDate = null;

            if(fromDateString != null)
            {
                fromDate = DateTimeOffset.Parse(fromDateString);
            }

            if(toDateString != null)
            {
                toDate = DateTimeOffset.Parse(toDateString);
            }

            // Act
            var episodesResponse = await client.GetEpisodesAsync(Format.Json, 1, 3, TestProgramId, fromDate, toDate, null);

            // Assert
            Assert.Equal(expectedCount, episodesResponse.Episodes.Count());
        }

        [Theory]
        [InlineData(AudioQuality.Lo, "lo.m4a")]
        [InlineData(AudioQuality.Normal, ".m4a")]
        [InlineData(AudioQuality.Hi, "hi.m4a")]
        public async Task TestGetEpisodesWithQualityAsync(AudioQuality audioQuality, string expectedExtension)
        {
            // Arrange
            var client = TestTools.CreateClient();

            // Act
            var episodesResponse = await client.GetEpisodesAsync(Format.Json, null, null, TestProgramId, null, null, audioQuality);

            // Assert
            var episode = episodesResponse.Episodes.First();

            Assert.EndsWith(expectedExtension, episode.Broadcast.Broadcastfiles.First().Url);
        }

        private const int TestEpisodeId = 1749909;

        [Fact]
        public async Task TestGetEpisodeAsync()
        {
            // Arrange
            var client = TestTools.CreateClient();

            // Act
            var episodeResponse = await client.GetEpisodeAsync(Format.Json, TestEpisodeId, null);

            // Assert
            Assert.NotNull(episodeResponse.Copyright);
            Assert.NotNull(episodeResponse.Episode);
            Assert.Equal(TestEpisodeId, episodeResponse.Episode.Id);
        }
    }
}
