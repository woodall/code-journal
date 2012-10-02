require './player'

describe Player do

  before do
    @initial_health = 150
    @player = Player.new('larry', @initial_health)
    $stdout = StringIO.new
  end


  it 'has a capitalized name' do
    @player.name.should == "Larry"
  end

  it "has an initial health" do
    @player.health.should == 150
  end

  it 'has a string representation' do
    @player.to_s.should == "I'm Larry with a health of 150 & a score of 155"
  end

  it 'computes a score as a the sum of its health and length of name' do
    @player.score.should == @initial_health + 5
  end

  it 'increases health by 15 when w00ted' do
    @player.w00t
    @player.health.should == @initial_health + 15
  end

  it 'decreases health by 10 when blammed' do
    @player.blam
    @player.health.should == @initial_health - 10
  end

  context "with a health great than 100" do
    before do
      @initial_health = 150
      @player = Player.new('larry', @initial_health)
      $stdout = StringIO.new
    end

    it 'is strong' do
      @player.should be_strong
    end
  end

  context 'with a healt less than 100' do
    before do
      @player = Player.new('larry', 100)
    end

    it 'is whimpy' do
      @player.strong?.should be_false
    end
  end

end

