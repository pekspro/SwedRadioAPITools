using System.Linq;
using System.Threading.Tasks;
using Xunit;

namespace Pekspro.SrApi.Test
{
    public class UnitTestNewsProgram
    {
        [Fact]
        public async Task TestGetNewsProgramsAsync()
        {
            // Arrange
            var client = TestTools.CreateClient();

            // Act
            var newsProgramsResponse = await client.GetNewsProgramsAsync(Format.Json);

            // Assert
            Assert.NotEmpty(newsProgramsResponse.Programs);

            var program = newsProgramsResponse.Programs.First();

            Assert.NotEmpty(program.Channel!.Name);
            Assert.NotEmpty(program.Programimage);
            Assert.NotEmpty(program.Programimagetemplate);
            Assert.NotEmpty(program.Programimagetemplatewide);
            Assert.NotEmpty(program.Programimagewide);
            Assert.NotEmpty(program.Programslug);
            Assert.NotEmpty(program.Programurl);
            Assert.NotEmpty(program.Responsibleeditor);
            Assert.NotEmpty(program.Socialimage);
            Assert.NotEmpty(program.Socialimagetemplate);
            Assert.Contains(newsProgramsResponse.Programs, a => a.Socialmediaplatforms.Any());
        }
    }
}
