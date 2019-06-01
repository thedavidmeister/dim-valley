let
 nixpkgs = builtins.fetchTarball{
  url = https://github.com/NixOS/nixpkgs/archive/19.03.tar.gz;
 };
 pkgs = import nixpkgs {};
in
with pkgs;
{
 dim-valley-shell =
  stdenv.mkDerivation rec {
   name = "dim-valley-shell";

   buildInputs = [
    boot
   ];
  };
}
