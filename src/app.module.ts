import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { AppResolver } from './app.resolver';
import * as path from 'node:path';

@Module({
  imports: [
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useFactory: () => {
        return {
          debug: false,
          includeStacktraceInErrorResponses: false,
          csrfPrevention: false,
          playground: false,
          sortSchema: true,
          autoSchemaFile: {
            federation: 2,
            path: path.join(process.cwd(), 'schema.graphql'),
          },
        };
      },
    }),
  ],
  providers: [AppResolver]
})
export class AppModule { }
