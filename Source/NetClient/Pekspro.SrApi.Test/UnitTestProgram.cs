using System.Linq;
using System.Threading.Tasks;
using Xunit;

namespace Pekspro.SrApi.Test
{
    public class UnitTestProgram
    {
        [Fact]
        public async Task TestGetProgramsAsync()
        {
            // Arrange
            var client = TestTools.CreateClient();

            // Act
            var programsResponse = await client.GetProgramsAsync(Format.Json, null, null, null, null);

            // Assert
            Assert.NotNull(programsResponse.Copyright);
            Assert.NotNull(programsResponse.Pagination);
            Assert.Equal(1, programsResponse.Pagination.Page);
            Assert.NotEmpty(programsResponse.Programs);

            var program = programsResponse.Programs.First();

            Assert.Contains(programsResponse.Programs, a => !string.IsNullOrWhiteSpace(a.Channel.Name));
            Assert.Contains(programsResponse.Programs, a => !string.IsNullOrWhiteSpace(a.Broadcastinfo));
            Assert.Contains(programsResponse.Programs, a => !string.IsNullOrWhiteSpace(a.Description));
            Assert.Contains(programsResponse.Programs, a => !string.IsNullOrWhiteSpace(a.Email));
            //Assert.Contains(programsResponse.Programs, a => !string.IsNullOrWhiteSpace(a.Payoff));
            Assert.Contains(programsResponse.Programs, a => !string.IsNullOrWhiteSpace(a.Programimage));
            Assert.Contains(programsResponse.Programs, a => !string.IsNullOrWhiteSpace(a.Programimagetemplate));
            Assert.Contains(programsResponse.Programs, a => !string.IsNullOrWhiteSpace(a.Programimagetemplatewide));
            Assert.Contains(programsResponse.Programs, a => !string.IsNullOrWhiteSpace(a.Programslug));
            Assert.Contains(programsResponse.Programs, a => !string.IsNullOrWhiteSpace(a.Programurl));
            Assert.Contains(programsResponse.Programs, a => !string.IsNullOrWhiteSpace(a.Responsibleeditor));
            Assert.Contains(programsResponse.Programs, a => !string.IsNullOrWhiteSpace(a.Socialimage));
            Assert.Contains(programsResponse.Programs, a => !string.IsNullOrWhiteSpace(a.Socialimagetemplate));
            Assert.Contains(programsResponse.Programs, a => a.Socialmediaplatforms.Any());
        }

        [Fact]
        public async Task TestGetProgramsPaginationAsync()
        {
            // Arrange
            var client = TestTools.CreateClient();

            // Act
            var programsResponse1 = await client.GetProgramsAsync(Format.Json, 1, 3, null, null);
            var programsResponse2 = await client.GetProgramsAsync(Format.Json, 2, 3, null, null);

            // Assert
            Assert.Equal(1, programsResponse1.Pagination.Page);
            Assert.Equal(3, programsResponse1.Pagination.Size);
            Assert.Equal(2, programsResponse2.Pagination.Page);
            Assert.Equal(3, programsResponse2.Pagination.Size);
            Assert.True(programsResponse1.Programs.Last().Id < programsResponse2.Programs.First().Id);
        }

        [Fact]
        public async Task TestGetProgramsWithCategoryAsync()
        {
            // Arrange
            var client = TestTools.CreateClient();

            // Act
            var programsResponse = await client.GetProgramsAsync(Format.Json, null, null, 133, null);

            // Assert
            Assert.True(programsResponse.Programs.Any());
            Assert.DoesNotContain(programsResponse.Programs, a => a.Programcategory.Id != 133);
        }

        [Theory]
        [InlineData(false)]
        [InlineData(true)]
        public async Task TestGetProgramsArchivedAsync(bool isArhived)
        {
            // Arrange
            var client = TestTools.CreateClient();

            // Act
            var programsResponse = await client.GetProgramsAsync(Format.Json, null, null, null, isArhived);

            // Assert
            Assert.True(programsResponse.Programs.Any());
            Assert.DoesNotContain(programsResponse.Programs, a => a.Archived == !isArhived);
        }

        private const int TestProgramId = 35;

        [Fact]
        public async Task TestGetProgramAsync()
        {
            // Arrange
            var client = TestTools.CreateClient();

            // Act
            var program = await client.GetProgramAsync(Format.Json, TestProgramId);

            // Assert
            Assert.NotNull(program.Copyright);
            Assert.NotNull(program.Program);
            Assert.Equal(TestProgramId, program.Program.Id);
        }
    }
}
