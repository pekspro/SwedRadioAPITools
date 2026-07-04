#nullable enable

namespace Pekspro.SrApi
{
    /// <summary>
    /// Partial implementation of SrClient to add request logging functionality.
    /// </summary>
    public partial class SrApiClient
    {
        public static string UserAgent { get; set; } = "Pekspro.SrApiClient";

        partial void PrepareRequest(System.Net.Http.HttpClient client, System.Net.Http.HttpRequestMessage request, string url)
        {
            request.Headers.Add("User-Agent", UserAgent);
        }

        partial void PrepareRequest(System.Net.Http.HttpClient client, System.Net.Http.HttpRequestMessage request, System.Text.StringBuilder urlBuilder)
        {
            request.Headers.Add("User-Agent", UserAgent);
        }
    }
}
