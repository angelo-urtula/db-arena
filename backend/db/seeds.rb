# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Gladiator.destroy_all
Kill.destroy_all

Gladiator.create(:name => "Maximus", :honor => "Loyalty", :motto => "ARE YOU NOT ENTERTAINED?", :reason => "Revenge")
Gladiator.create(:name => "Mad Max", :honor => "There is no honor.", :motto => "My world is fire and blood.", :reason => "Survival")

Kill.create(:gladiator_id => 3, :message => "Brothers, what we do in life echoes in eternity.")
Kill.create(:gladiator_id => 3, :message => "Strength and honor!")
Kill.create(:gladiator_id => 3, :message => "Death smiles at us all. All a man can do is smile back.")
Kill.create(:gladiator_id => 4, :message => "Hope is a mistake.")
Kill.create(:gladiator_id => 4, :message => "Once I was a cop.")
