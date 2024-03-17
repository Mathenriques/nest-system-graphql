import { Args, Mutation, Query, ResolveField, Resolver, Root } from "@nestjs/graphql";
import { CreateUserInput } from "../dtos/inputs/users-dto";
import { UserModel } from "../dtos/models/user-model";
import { AccountModel } from "../dtos/models/account-model";

@Resolver(() => UserModel)
export class UserResolver {
  @Query(() => [UserModel])
  async user() {
    return [
      {
        name: "Matheus Henriques",
        email: "math.marqui@gmail.com"
      }
    ]
  }

  @Mutation(() => UserModel)
  async createUser(@Args('data') data: CreateUserInput) {
    const user = {
      name: data.name,
      email: data.email
    }
    return user
  }

  @ResolveField(() => AccountModel)
  async account(@Root() user: AccountModel) {
    console.log(user);

    return {
      number: 123456789
    }
  }
}