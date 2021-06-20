class CreateGladiators < ActiveRecord::Migration[6.1]
  def change
    create_table :gladiators do |t|
      t.string :name
      t.string :motto
      t.string :reason
      t.string :honor

      t.timestamps
    end
  end
end
