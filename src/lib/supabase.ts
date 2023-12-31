import { createClient } from "@supabase/supabase-js";
import AsyncStorage from "@react-native-async-storage/async-storage";
import "react-native-url-polyfill/auto";

const supabaseURL = "https://akhjzvromqvijgfqpzxr.supabase.co";
const supabaseKey =
	"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFraGp6dnJvbXF2aWpnZnFwenhyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDQwNDQ5NTEsImV4cCI6MjAxOTYyMDk1MX0.11lFly_drYb5rLZgbghoJnsfGSHLwrkrYQky9ZC3sIg";

export const supabase = createClient(supabaseURL, supabaseKey, {
	auth: {
		storage: AsyncStorage,
		autoRefreshToken: true,
		persistSession: true,
		detectSessionInUrl: true,
	},
});
