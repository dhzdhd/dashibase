import { Page, Attribute, AttributeType, Config, Trigger } from './utils/config'

// Change this to build your own dashboard - see `utils/config.ts` for documentation

const DASHIBASE_CONFIG:Config = {
  name: "Manipal OSF Dashboard",
  supabase_url: import.meta.env.VITE_SUPABASE_URL!,
  supabase_anon_key: import.meta.env.VITE_SUPABASE_KEY!,
  pages: [
    {
      name: "My Page",
      page_id: "my_page",
      table_id: "my_table",
      mode: "list",
      attributes: [
        {
          id: "value",
          label: "Value",
          required: false,
          readonly: false,
          type: AttributeType.Text,
        },
        {
          // Enum example - this will generate a dropdown with the provided options
          id: "foo",
          label: "Foo",
          required: false,
          readonly: false,
          type: AttributeType.Enum,
          enumOptions: ['foo', 'bar'], // Specify enum options
        },
        {
          // Join example - for showing joined data from other tables
          // This will also work with tables joined via join tables
          // TODO: Add clearer documentation and examples
          id: "foreign_table(foreign_table_col)",
          label: "Join Example",
          required: false,
          readonly: false,
          type: AttributeType.Join,
        },
      ] as Attribute[],
      // Trigger example - for adding custom actions to the page
      // See config.ts for more details
      // TODO: Add clearer documentation and examples
      triggers: [
        {
          label: 'My Action',
          code: 'alert(user.email)'
        }
      ] as Trigger[]
    },
  ] as Page[],
}

export default DASHIBASE_CONFIG
