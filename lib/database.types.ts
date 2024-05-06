export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      Cinema_List: {
        Row: {
          cinema_address: string | null
          cinema_name: string | null
          created_at: string
          id: number
        }
        Insert: {
          cinema_address?: string | null
          cinema_name?: string | null
          created_at?: string
          id?: number
        }
        Update: {
          cinema_address?: string | null
          cinema_name?: string | null
          created_at?: string
          id?: number
        }
        Relationships: []
      }
      Cinema_Media: {
        Row: {
          cinema_image_url: string | null
          cinema_movies_id: number | null
          created_at: string
          id: number
        }
        Insert: {
          cinema_image_url?: string | null
          cinema_movies_id?: number | null
          created_at?: string
          id?: number
        }
        Update: {
          cinema_image_url?: string | null
          cinema_movies_id?: number | null
          created_at?: string
          id?: number
        }
        Relationships: [
          {
            foreignKeyName: "Cinema_Media_cinema_movies_id_fkey"
            columns: ["cinema_movies_id"]
            isOneToOne: false
            referencedRelation: "Cinema_movies"
            referencedColumns: ["id"]
          },
        ]
      }
      Cinema_movies: {
        Row: {
          created_at: string
          id: number
          movie_cast: Json | null
          movie_cinema_id: number | null
          movie_description: string | null
          movie_duration: number | null
          movie_genre: string | null
          movie_released_date: string | null
          movie_title: string | null
        }
        Insert: {
          created_at?: string
          id?: number
          movie_cast?: Json | null
          movie_cinema_id?: number | null
          movie_description?: string | null
          movie_duration?: number | null
          movie_genre?: string | null
          movie_released_date?: string | null
          movie_title?: string | null
        }
        Update: {
          created_at?: string
          id?: number
          movie_cast?: Json | null
          movie_cinema_id?: number | null
          movie_description?: string | null
          movie_duration?: number | null
          movie_genre?: string | null
          movie_released_date?: string | null
          movie_title?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "Cinema_movies_movie_cinema_id_fkey"
            columns: ["movie_cinema_id"]
            isOneToOne: false
            referencedRelation: "Cinema_List"
            referencedColumns: ["id"]
          },
        ]
      }
      Event_categories: {
        Row: {
          created_at: string
          event_categories: string | null
          id: number
        }
        Insert: {
          created_at?: string
          event_categories?: string | null
          id?: number
        }
        Update: {
          created_at?: string
          event_categories?: string | null
          id?: number
        }
        Relationships: []
      }
      Event_Media: {
        Row: {
          created_at: string
          event_id: number | null
          "event-media": string | null
          id: number
        }
        Insert: {
          created_at?: string
          event_id?: number | null
          "event-media"?: string | null
          id?: number
        }
        Update: {
          created_at?: string
          event_id?: number | null
          "event-media"?: string | null
          id?: number
        }
        Relationships: [
          {
            foreignKeyName: "Event_Media_event_id_fkey"
            columns: ["event_id"]
            isOneToOne: false
            referencedRelation: "Event_Ticket"
            referencedColumns: ["id"]
          },
        ]
      }
      Event_Ticket: {
        Row: {
          created_at: string
          event_date: string | null
          event_description: string | null
          event_details: string | null
          event_name: string | null
          event_time: string | null
          events_address: string | null
          events_categories: string | null
          events_geolocation: Json | null
          events_isFree: boolean | null
          events_pricing: number | null
          events_tier: Json | null
          id: number
        }
        Insert: {
          created_at?: string
          event_date?: string | null
          event_description?: string | null
          event_details?: string | null
          event_name?: string | null
          event_time?: string | null
          events_address?: string | null
          events_categories?: string | null
          events_geolocation?: Json | null
          events_isFree?: boolean | null
          events_pricing?: number | null
          events_tier?: Json | null
          id?: number
        }
        Update: {
          created_at?: string
          event_date?: string | null
          event_description?: string | null
          event_details?: string | null
          event_name?: string | null
          event_time?: string | null
          events_address?: string | null
          events_categories?: string | null
          events_geolocation?: Json | null
          events_isFree?: boolean | null
          events_pricing?: number | null
          events_tier?: Json | null
          id?: number
        }
        Relationships: [
          {
            foreignKeyName: "Event_Ticket_events_categories_fkey"
            columns: ["events_categories"]
            isOneToOne: false
            referencedRelation: "Event_categories"
            referencedColumns: ["event_categories"]
          },
        ]
      }
      Restaurant_List: {
        Row: {
          about: string | null
          address: string
          closing_time: string
          created_at: string
          id: number
          images: string[]
          name: string
          opening_time: string
        }
        Insert: {
          about?: string | null
          address: string
          closing_time: string
          created_at?: string
          id?: number
          images: string[]
          name: string
          opening_time: string
        }
        Update: {
          about?: string | null
          address?: string
          closing_time?: string
          created_at?: string
          id?: number
          images?: string[]
          name?: string
          opening_time?: string
        }
        Relationships: []
      }
      Restaurant_Media: {
        Row: {
          created_at: string
          id: number
          restaurant_id: number | null
          "restaurant-media": string | null
        }
        Insert: {
          created_at?: string
          id?: number
          restaurant_id?: number | null
          "restaurant-media"?: string | null
        }
        Update: {
          created_at?: string
          id?: number
          restaurant_id?: number | null
          "restaurant-media"?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "Restaurant_Media_restaurant_id_fkey"
            columns: ["restaurant_id"]
            isOneToOne: false
            referencedRelation: "Restaurants_Ticket"
            referencedColumns: ["id"]
          },
        ]
      }
      Restaurants_categories: {
        Row: {
          created_at: string
          id: number
          restaurant_categories: string | null
        }
        Insert: {
          created_at?: string
          id?: number
          restaurant_categories?: string | null
        }
        Update: {
          created_at?: string
          id?: number
          restaurant_categories?: string | null
        }
        Relationships: []
      }
      Restaurants_Ticket: {
        Row: {
          created_at: string
          id: number
          restaurant_name: string | null
          restaurants_address: string | null
          restaurants_categories: string | null
          restaurants_contact: Json | null
          restaurants_cost_for_two: number | null
          restaurants_geolocation: Json | null
          restaurants_highlights: Json | null
          restaurants_opening_days_and_time: Json | null
          restaurants_walkinoffer: Json | null
          "restaurants-cuisine": Json | null
          "restaurants-rating": number | null
        }
        Insert: {
          created_at?: string
          id?: number
          restaurant_name?: string | null
          restaurants_address?: string | null
          restaurants_categories?: string | null
          restaurants_contact?: Json | null
          restaurants_cost_for_two?: number | null
          restaurants_geolocation?: Json | null
          restaurants_highlights?: Json | null
          restaurants_opening_days_and_time?: Json | null
          restaurants_walkinoffer?: Json | null
          "restaurants-cuisine"?: Json | null
          "restaurants-rating"?: number | null
        }
        Update: {
          created_at?: string
          id?: number
          restaurant_name?: string | null
          restaurants_address?: string | null
          restaurants_categories?: string | null
          restaurants_contact?: Json | null
          restaurants_cost_for_two?: number | null
          restaurants_geolocation?: Json | null
          restaurants_highlights?: Json | null
          restaurants_opening_days_and_time?: Json | null
          restaurants_walkinoffer?: Json | null
          "restaurants-cuisine"?: Json | null
          "restaurants-rating"?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "Restaurants_Ticket_restaurants_categories_fkey"
            columns: ["restaurants_categories"]
            isOneToOne: false
            referencedRelation: "Restaurants_categories"
            referencedColumns: ["restaurant_categories"]
          },
        ]
      }
      User_Information: {
        Row: {
          created_at: string
          id: number
          user_amoutMade: string | null
          user_cinemabooked: string | null
          user_email: string | null
          user_eventsbooked: string | null
          user_moviebooked: number | null
          user_phoneNumber: string | null
          user_restaurant_booked: string | null
          user_uniqueBookingId: string | null
        }
        Insert: {
          created_at?: string
          id?: number
          user_amoutMade?: string | null
          user_cinemabooked?: string | null
          user_email?: string | null
          user_eventsbooked?: string | null
          user_moviebooked?: number | null
          user_phoneNumber?: string | null
          user_restaurant_booked?: string | null
          user_uniqueBookingId?: string | null
        }
        Update: {
          created_at?: string
          id?: number
          user_amoutMade?: string | null
          user_cinemabooked?: string | null
          user_email?: string | null
          user_eventsbooked?: string | null
          user_moviebooked?: number | null
          user_phoneNumber?: string | null
          user_restaurant_booked?: string | null
          user_uniqueBookingId?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "Event_User_user_cinemabooked_fkey"
            columns: ["user_cinemabooked"]
            isOneToOne: false
            referencedRelation: "Cinema_List"
            referencedColumns: ["cinema_name"]
          },
          {
            foreignKeyName: "Event_User_user_eventsbooked_fkey"
            columns: ["user_eventsbooked"]
            isOneToOne: false
            referencedRelation: "Event_Ticket"
            referencedColumns: ["event_name"]
          },
          {
            foreignKeyName: "Event_User_user_moviebooked_fkey"
            columns: ["user_moviebooked"]
            isOneToOne: false
            referencedRelation: "Cinema_movies"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "User_Information_user_restaurant_booked_fkey"
            columns: ["user_restaurant_booked"]
            isOneToOne: false
            referencedRelation: "Restaurants_Ticket"
            referencedColumns: ["restaurant_name"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never
