-- Create the contact_messages table
CREATE TABLE contact_messages (
    id BIGSERIAL PRIMARY KEY,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()),
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    message TEXT NOT NULL
); 