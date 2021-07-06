namespace Pekspro.SrApi.Test
{
    public class TestTools
    {
        static public SrApiClient CreateClient()
        {
            return new SrApiClient(new System.Net.Http.HttpClient());
        }
    }
}
