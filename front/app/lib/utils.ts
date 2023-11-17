import { ApolloClient, InMemoryCache } from '@apollo/client';

export function getClient() {
    return new ApolloClient({
        uri: process.env['NEXT_PUBLIC_API_URL'],
        cache: new InMemoryCache(),
    });
}