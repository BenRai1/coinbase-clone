import sanityClient from "@sanity/client"

export const client = sanityClient({
    projectId: "8c0m40ri",
    dataset: "production",
    apiVersion: "2022-08-21",
    token: "skYJ002nuzpkdvbgB75GapuJE7BZKb0hjBEIHDl9rlZIa9OuWNM5ou0l0WH7d86VJOxIqTbhuHNixI4PfVBFu37QC1Am9Sc9QlPNaG2tj6Jy4EE0tR93uKA4b8avuG2HUHnrDLgu08p62xQnlGI8QNtiSFMrr0W95pbvbDCo6JRM4tMFoUCX",
    useCdn: "false",
})
