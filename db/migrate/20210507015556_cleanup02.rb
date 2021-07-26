class Cleanup02 < ActiveRecord::Migration[6.1]
  def change
    drop_table :sources
    drop_table :divisions
    drop_table :tops
    
  end
end
