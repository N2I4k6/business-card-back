import { Query, Resolver } from '@nestjs/graphql';
import { Profile } from './models/profile.model.js';
import { ProfileService } from './profile.service.js';

@Resolver(() => Profile)
export class ProfileResolver {
  constructor(private readonly profileService: ProfileService) {}

  @Query(() => Profile, { name: 'profile' })
  async getProfile(): Promise<Profile> {
    return this.profileService.getMainProfile();
  }
}
