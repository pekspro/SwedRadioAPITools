using System;
using System.Linq;
using System.Threading.Tasks;
using Xunit;

namespace Pekspro.SrApi.Test
{
    public class UnitTestPlaylist
    {
        private const int TestChannelId = 164;
        private const int TestProgramId = 2697;

        [Fact]
        public async Task GetPlaylistRightNowAsync()
        {
            // Arrange
            var client = TestTools.CreateClient();

            // Act
            var playlist = await client.GetPlaylistRightNowAsync(Format.Json, TestChannelId);

            // Assert
            Assert.NotNull(playlist.Playlist);
        }

        [Fact]
        public async Task GetPlaylistByChannelIdAsync()
        {
            // Arrange
            var client = TestTools.CreateClient();

            // Act
            var playlist = await client.GetPlaylistByChannelAsync(Format.Json, null, TestChannelId, null, null);

            // Assert
            Assert.NotNull(playlist.Copyright);
            Assert.NotNull(playlist.Song);
            Assert.NotEmpty(playlist.Song);
        }

        [Fact]
        public async Task GetPlaylistByChannelIdWithTimeLimitAsync()
        {
            // Arrange
            var client = TestTools.CreateClient();

            // Act
            DateTimeOffset startDateTime = new DateTimeOffset(new DateTime(2021, 4, 5), TimeSpan.Zero);
            DateTimeOffset endDateTime = new DateTimeOffset(new DateTime(2021, 4, 6), TimeSpan.Zero);
            var playlist = await client.GetPlaylistByChannelAsync(Format.Json, 1000, TestChannelId, startDateTime, endDateTime);

            // Assert
            Assert.NotNull(playlist.Copyright);
            Assert.NotNull(playlist.Song);
            Assert.DoesNotContain(playlist.Song, a => a.Starttimeutc < startDateTime.AddHours(-12)); //May be some issue with start time filtering
            Assert.DoesNotContain(playlist.Song, a => a.Starttimeutc > endDateTime);
        }

        [Fact]
        public async Task GetPlaylistByChannelIdWithSizeLimitAsync()
        {
            // Arrange
            var client = TestTools.CreateClient();

            // Act
            var playlist = await client.GetPlaylistByChannelAsync(Format.Json, 2, TestChannelId, null, null);

            // Assert
            Assert.NotNull(playlist.Copyright);
            Assert.NotNull(playlist.Song);
            Assert.Equal(2, playlist.Song.Count);
        }

        [Fact]
        public async Task GetPlaylistByProgramIdAsync()
        {
            // Arrange
            var client = TestTools.CreateClient();

            // Act
            var playlist = await client.GetPlaylistByProgramAsync(Format.Json, null, TestProgramId, null, null);

            // Assert
            Assert.NotNull(playlist.Copyright);
            Assert.NotNull(playlist.Song);
        }

        [Fact]
        public async Task GetPlaylistByProgramIdWithTimeLimitAsync()
        {
            // Arrange
            var client = TestTools.CreateClient();

            // Act
            DateTimeOffset startDateTime = new DateTimeOffset(new DateTime(2021, 3, 1), TimeSpan.Zero);
            DateTimeOffset endDateTime = new DateTimeOffset(new DateTime(2021, 4, 6), TimeSpan.Zero);
            var playlist = await client.GetPlaylistByProgramAsync(Format.Json, 1000, TestProgramId, startDateTime, endDateTime);

            // Assert
            Assert.NotNull(playlist.Copyright);
            Assert.NotNull(playlist.Song);
            Assert.DoesNotContain(playlist.Song, a => a.Starttimeutc < startDateTime);
            Assert.DoesNotContain(playlist.Song, a => a.Starttimeutc > endDateTime);
        }

        // For some reason server doesn't use the size parameter.
        //[Fact]
        //public async Task GetPlaylistByProgramIdWithSizeLimitAsync()
        //{
        //    // Arrange
        //    var client = TestTools.CreateClient();
            

        //    // Act
        //    DateTimeOffset startDateTime = new DateTimeOffset(new DateTime(2021, 3, 1), TimeSpan.Zero);
        //    DateTimeOffset endDateTime = new DateTimeOffset(new DateTime(2021, 4, 6), TimeSpan.Zero);
        //    var playlist = await client.GetPlaylistByProgramAsync(Format.Json, 2, TestProgramId, startDateTime, endDateTime);

        //    // Assert
        //    Assert.NotNull(playlist.Copyright);
        //    Assert.NotNull(playlist.Song);
        //    Assert.Equal(2, playlist.Song.Count);
        //}



        [Fact]
        public async Task GetGetPlaylistByEpisodeAsync()
        {
            // Arrange
            var client = TestTools.CreateClient();

            // Act
            var playlist = await client.GetPlaylistByEpisodeAsync(Format.Json, 422962);

            // Assert
            Assert.NotNull(playlist.Copyright);
            Assert.NotNull(playlist.Song);
        }
    }
}
