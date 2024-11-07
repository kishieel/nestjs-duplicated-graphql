import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { print } from 'graphql';
import gql from 'graphql-tag';
import { agent } from 'supertest';
import { AppModule } from './../src/app.module';

describe('AppResolver (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = module.createNestApplication();
    await app.init();
  });

  it('should work', async () => {
    await agent(app.getHttpServer())
      .post('/graphql')
      .send({
        operationName: 'Hello',
        query: print(gql`
          query Hello {
            hello
          }
        `)
      })
      .expect(200)
      .expect(({ body }) => console.log(body))
  })
});
