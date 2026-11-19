import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { SupabaseClient, createClient } from '@supabase/supabase-js';

@Injectable()
export class SupabaseService {
    private supabase : SupabaseClient

    constructor(private configService: ConfigService){
        this.supabase = createClient(
            this.configService.getOrThrow<string>('SUPABASE_URL'),
            this.configService.getOrThrow<string>('SUPABASE_SECRET_KEY')
        )
    }
    getClient(): SupabaseClient {
    return this.supabase;
  }
}
