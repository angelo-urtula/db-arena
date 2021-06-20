class CreateSouls < ActiveRecord::Migration[6.1]
  def change
    create_table :souls do |t|
      t.references :gladiator, null: false, foreign_key: { on_delete: :cascade }

      t.timestamps
    end
  end
end
