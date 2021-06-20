class CreateKills < ActiveRecord::Migration[6.1]
  def change
    create_table :kills do |t|
      t.references :gladiator, null: false, foreign_key: { on_delete: :cascade }
      t.string :message

      t.timestamps
    end
  end
end
