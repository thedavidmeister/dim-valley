let
 pkgs = import <nixpkgs> {};
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
